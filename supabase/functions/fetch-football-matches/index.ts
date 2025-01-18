import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const apiKey = Deno.env.get('FOOTBALL_DATA_API_KEY')
    if (!apiKey) {
      throw new Error('Football Data API key not found')
    }

    // Fetch matches from the last 7 days
    const today = new Date()
    const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
    
    const response = await fetch(
      `https://api.football-data.org/v4/matches?dateFrom=${lastWeek.toISOString().split('T')[0]}&dateTo=${today.toISOString().split('T')[0]}`,
      {
        headers: {
          'X-Auth-Token': apiKey,
        },
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log('Successfully fetched football matches')

    return new Response(
      JSON.stringify(data),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error:', error.message)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})