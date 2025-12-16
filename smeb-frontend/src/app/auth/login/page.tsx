'use client'
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Activity } from 'lucide-react';

export default function ModernLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulación de login
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempt:', { email, password });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="w-full max-w-6xl flex gap-8 relative z-10">
        {/* Left side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 flex-col justify-between text-white shadow-2xl">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Activity className="w-7 h-7" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">SMEB</h1>
                <p className="text-blue-200 text-sm">Gestión Biomédica</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight">
                Gestiona tus equipos biomédicos de forma eficiente
              </h2>
              <p className="text-blue-100 text-lg">
                Sistema integral para el mantenimiento y monitoreo de equipos médicos
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-blue-100">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">✓</div>
              <span>Control de mantenimientos preventivos</span>
            </div>
            <div className="flex items-center gap-3 text-blue-100">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">✓</div>
              <span>Reportes en tiempo real</span>
            </div>
            <div className="flex items-center gap-3 text-blue-100">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">✓</div>
              <span>Gestión de inventario</span>
            </div>
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md">
            {/* Mobile logo */}
            <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">SMEB</h1>
                <p className="text-gray-600 text-sm">Gestión Biomédica</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Iniciar Sesión</h2>
                <p className="text-gray-600">Ingresa tus credenciales para continuar</p>
              </div>

              <div className="space-y-6">
                {/* Email field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="usuario@correo.com"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Password field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contraseña
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-600">Recordarme</span>
                  </label>
                  <button onClick={() => console.log('Forgot password')} className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>

                {/* Submit button */}
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Iniciando sesión...
                    </span>
                  ) : (
                    'Entrar'
                  )}
                </button>
              </div>

              {/* Footer */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  ¿Necesitas ayuda? <button onClick={() => console.log('Support')} className="text-blue-600 hover:text-blue-700 font-medium">Contacta soporte</button>
                </p>
              </div>
            </div>

            {/* Version info */}
            <p className="text-center text-sm text-gray-500 mt-6">
              SMEB v1.0 © 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}