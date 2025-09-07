import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mountain, Phone, Lock, Star, Users, Trophy, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import everestBaseCamp from './assets/everest-base-camp.jpg'
import everestSummit from './assets/everest-summit.jpg'
import mountainDramatic from './assets/mountain-dramatic.jpg'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showError, setShowError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const passwordRef = useRef(null)

  const validPasswords = ['SUMMIT', 'PINNACLE', 'ALTITUDE', 'EVEREST', 'ASCEND', 'BASECAMP', 'LEGEND']

  const handlePasswordSubmit = async (e) => {
    e.preventDefault()
    const password = passwordRef.current?.value || ''
    
    setIsLoading(true)
    setShowError(false)

    // Simulate authentication delay for premium feel
    await new Promise(resolve => setTimeout(resolve, 1500))

    if (validPasswords.includes(password.trim().toUpperCase())) {
      setIsAuthenticated(true)
    } else {
      setShowError(true)
    }
    setIsLoading(false)
  }

  const PasswordGate = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${mountainDramatic})` }}
      />
      <div className="relative z-10 max-w-md w-full">
        <Card className="bg-black/40 backdrop-blur-lg border-amber-500/20 shadow-2xl">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-4">
                <Lock className="w-8 h-8 text-black" />
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-2">Private Invitation</h1>
            <p className="text-gray-300 mb-6">Enter your exclusive access code</p>
            
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <input
                ref={passwordRef}
                type="password"
                placeholder="Access Code"
                className="bg-white/10 border-white/20 text-white placeholder-gray-400 text-center text-lg tracking-widest w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-amber-500"
                disabled={isLoading}
                autoComplete="off"
              />
              
              {showError && (
                <p className="text-red-400 text-sm">
                  Invalid access code. Please check your invitation.
                </p>
              )}
              
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold py-3 text-lg"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  'Enter'
                )}
              </Button>
            </form>
            
            <p className="text-gray-400 text-xs mt-6">
              By invitation only • Confidential access required
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const MainLandingPage = () => (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${everestBaseCamp})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-amber-500/20 text-amber-300 border-amber-500/30 px-4 py-2 text-sm font-medium">
            By Confidential Invitation Only
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
            Mt. Everest Private Mastermind
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            The Pinnacle of Power. The Summit of Privilege.
          </p>
          
          <p className="text-lg text-amber-300 mb-8 italic font-medium">
            "People will want you to fail, for the risks they did not want to take."
          </p>
          
          <Button 
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold text-lg px-8 py-4 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            Secure Your Position
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Exclusive Experience Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Where Legends Are <span className="text-amber-400">Forged</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At 17,598 feet above sea level, where oxygen is scarce and only the elite dare to tread, 
              you'll discover what separates the extraordinary from the ordinary.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-black/40 border-amber-500/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <Mountain className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Base Camp Intensive</h3>
                <p className="text-gray-300">
                  3 days of immersive strategy sessions where billion-dollar decisions are made in the shadow of the world's highest peak.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-amber-500/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Elite Network</h3>
                <p className="text-gray-300">
                  Connect with 8 hand-selected leaders who've built empires and shaped industries. Your new inner circle awaits.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-amber-500/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <Trophy className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Legendary Status</h3>
                <p className="text-gray-300">
                  Return home transformed. Unshakable confidence. Unstoppable momentum. The summit changes everything.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exclusivity Section */}
      <section className="py-20 px-4 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${everestSummit})` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-red-500/20 text-red-300 border-red-500/30 px-4 py-2 text-sm font-medium">
            Extremely Limited Access
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Only <span className="text-amber-400">8 Positions</span> Available
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Star className="w-6 h-6 text-amber-400 mr-2" />
                Who Qualifies
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>• C-level executives of $10M+ companies</li>
                <li>• Serial entrepreneurs with proven exits</li>
                <li>• Industry leaders shaping the future</li>
                <li>• Visionaries ready for their next summit</li>
              </ul>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Globe className="w-6 h-6 text-amber-400 mr-2" />
                What's Included
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Private helicopter transport to Base Camp</li>
                <li>• Luxury expedition-grade accommodations</li>
                <li>• Personal sherpa and success strategist</li>
                <li>• Lifetime access to the Summit Circle</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-black to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Ascent Begins Now
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The summit waits for no one. While others hesitate at base camp, legends are already climbing.
          </p>
          
          <div className="bg-black/60 backdrop-blur-lg border border-amber-500/20 rounded-lg p-8 mb-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Private Access Line</h3>
            <p className="text-3xl font-bold mb-2">983-777-5424</p>
            <p className="text-gray-400 text-sm">Available 24/7 for qualified candidates</p>
          </div>
          
          <Button 
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold text-xl px-12 py-6 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-6 h-6 mr-3" />
            Claim Your Position
          </Button>
          
          <p className="text-gray-500 text-sm mt-6">
            By invitation only. Confidential access required. Terms apply.
          </p>
        </div>
      </section>
    </div>
  )

  return (
    <>
      {!isAuthenticated ? (
        <PasswordGate />
      ) : (
        <MainLandingPage />
      )}
    </>
  )
}

export default App

