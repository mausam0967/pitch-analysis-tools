import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { AuthError, AuthApiError } from '@supabase/supabase-js';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState<'player' | 'coach'>('player');
  const [isLoading, setIsLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const validatePassword = (password: string): string | null => {
    if (password.length < 6) {
      return 'Password must be at least 6 characters long';
    }
    return null;
  };

  const getErrorMessage = (error: AuthError) => {
    if (error instanceof AuthApiError) {
      switch (error.status) {
        case 422:
          if (error.message.includes('weak_password')) {
            return 'Password is too weak. It should be at least 6 characters long.';
          }
          return 'Invalid email format or weak password.';
        case 400:
          return 'Invalid registration details. Please check your information.';
        default:
          return error.message;
      }
    }
    return 'An unexpected error occurred. Please try again.';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const passwordError = validatePassword(password);
    if (passwordError) {
      toast({
        title: 'Validation Error',
        description: passwordError,
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    
    try {
      await signUp(email, password);
      toast({
        title: 'Success',
        description: 'Registration successful! Please check your email to verify your account.',
      });
      navigate('/auth/login');
    } catch (error) {
      const message = getErrorMessage(error as AuthError);
      toast({
        title: 'Error',
        description: message,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Create an account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{' '}
            <a href="/auth/login" className="text-blue-600 hover:text-blue-500">
              sign in to your account
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
                disabled={isLoading}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
                disabled={isLoading}
              />
              <p className="mt-1 text-sm text-gray-500">
                Password must be at least 6 characters long
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Account Type</label>
              <div className="mt-2 space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="player"
                    checked={accountType === 'player'}
                    onChange={(e) => setAccountType(e.target.value as 'player')}
                    className="form-radio"
                    disabled={isLoading}
                  />
                  <span className="ml-2">Player</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="coach"
                    checked={accountType === 'coach'}
                    onChange={(e) => setAccountType(e.target.value as 'coach')}
                    className="form-radio"
                    disabled={isLoading}
                  />
                  <span className="ml-2">Coach</span>
                </label>
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Creating account...' : 'Create account'}
          </Button>
        </form>
      </div>
    </div>
  );
}