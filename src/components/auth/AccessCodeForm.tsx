import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import type { AccessCodeFormData } from '../../types/auth';

export function AccessCodeForm() {
  const { signIn, error } = useAuth();
  const [formData, setFormData] = useState<AccessCodeFormData>({
    accessCode: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(formData.accessCode);
    } catch (error) {
      // Error is handled by useAuth hook
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F0F0F] px-4">
      <div className="w-full max-w-md bg-[#1C1C1C] rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Enter Access Code</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="accessCode" className="block text-sm font-medium text-gray-300 mb-2">
              Access Code
            </label>
            <input
              id="accessCode"
              type="text"
              required
              autoFocus
              className="w-full px-4 py-2 bg-[#2C2C2C] rounded-lg border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.accessCode}
              onChange={(e) => setFormData(prev => ({ ...prev, accessCode: e.target.value }))}
              placeholder="Enter your access code"
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}