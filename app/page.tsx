import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Brain,
  Building2,
  Plug,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
  Users,
  Code,
  Sparkles,
  Heart,
  Home,
  Plane,
  Calendar,
  Star,
  Bot,
  Apple,
} from 'lucide-react';

export default function SmartCardLanding() {
  return (
    <div className="min-h-screen bg-background dark">
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 animate-fade-in-left">
              <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-background" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Smart Card
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8 animate-fade-in-right">
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                Features
              </a>
              <a
                href="#integrations"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                Integrations
              </a>
              <a
                href="#developers"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                Developers
              </a>
              <Button className="linear-button-primary rounded-lg font-medium px-6">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground border-2 border-border/50 rounded-full px-4 py-1.5 font-medium animate-fade-in-up"
                >
                  <Star className="w-4 h-4 mr-2" />
                  AI-Powered Platform
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight text-foreground animate-fade-in-up animate-delay-100">
                  Plan the present. Build the{' '}
                  <span className="text-foreground">future</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty max-w-2xl leading-relaxed animate-fade-in-up animate-delay-200">
                  Replace every app with Smart Cards. The AI-powered platform
                  that transforms your phone into a unified command center. One
                  app, infinite possibilities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
                <Button
                  size="lg"
                  className="linear-button-secondary rounded-lg font-medium px-8"
                >
                  Contact sales
                </Button>
                <Button
                  size="lg"
                  className="linear-button-primary rounded-lg font-medium px-8"
                >
                  Get started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in-right animate-delay-200">
              <div className="iphone-mockup mx-auto w-80 h-[600px] animate-float">
                <div className="iphone-notch"></div>
                <div className="iphone-screen phone-screen-scrollable h-full pt-12 pb-8 px-6">
                  <div className="bento-grid h-full">
                    <div className="bento-item-1 phone-card rounded-xl p-4 flex items-center">
                      <Brain className="w-10 h-10 text-foreground mr-4 flex-shrink-0" />
                      <div>
                        <div className="text-lg font-bold text-foreground">
                          AI Assistant
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Ready to help with anything
                        </div>
                      </div>
                    </div>
                    <div className="bento-item-2 phone-card rounded-xl p-3 flex flex-col justify-center items-center text-center">
                      <Plane className="w-6 h-6 text-foreground mb-1" />
                      <div className="text-xs font-semibold text-foreground">
                        Travel
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Book trips
                      </div>
                    </div>
                    <div className="bento-item-3 phone-card rounded-xl p-3 flex flex-col justify-center items-center text-center">
                      <Heart className="w-6 h-6 text-foreground mb-1" />
                      <div className="text-xs font-semibold text-foreground">
                        Health
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Wellness
                      </div>
                    </div>
                    <div className="bento-item-4 phone-card rounded-xl p-3 flex items-center">
                      <Home className="w-6 h-6 text-foreground mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-foreground">
                          Smart Home
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Control devices
                        </div>
                      </div>
                    </div>
                    <div className="bento-item-5 phone-card rounded-xl p-3 flex flex-col justify-center items-center text-center">
                      <Calendar className="w-5 h-5 text-foreground mb-1" />
                      <div className="text-xs font-semibold text-foreground">
                        Cal
                      </div>
                    </div>
                    <div className="bento-item-6 phone-card rounded-xl p-3 flex flex-col justify-center items-center text-center">
                      <Building2 className="w-6 h-6 text-foreground mb-1" />
                      <div className="text-xs font-semibold text-foreground">
                        Finance
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Banking
                      </div>
                    </div>
                    <div className="bento-item-7 phone-card rounded-xl p-3 flex items-center">
                      <Shield className="w-5 h-5 text-foreground mr-2 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-foreground">
                          Settings
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Privacy
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 phone-card rounded-xl p-3 flex flex-col justify-center items-center text-center">
                      <Users className="w-6 h-6 text-foreground mb-1" />
                      <div className="text-xs font-semibold text-foreground">
                        Social
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Connect
                      </div>
                    </div>
                    <div className="col-span-6 phone-card rounded-xl p-3 flex flex-col justify-center items-center text-center">
                      <Code className="w-6 h-6 text-foreground mb-1" />
                      <div className="text-xs font-semibold text-foreground">
                        Dev Tools
                      </div>
                      <div className="text-xs text-muted-foreground">Code</div>
                    </div>
                  </div>
                </div>
                <div className="iphone-home-indicator"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="integrations" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance text-foreground">
              Three Revolutionary Integration Modules
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Choose your integration path. Each module designed for different
              needs, all working together seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6 auto-rows-fr">
            <div className="col-span-12 lg:col-span-8 animate-fade-in-up animate-delay-100 group">
              <Card className="linear-card bg-card rounded-lg h-full border-2 border-white/20 hover:border-white/30 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    AI-Powered Integrations
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    ChatGPT Operators, Grok Agents, and multi-AI provider
                    ecosystem. Let AI complete tasks across platforms with
                    natural language commands.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-foreground mr-2 flex-shrink-0" />
                    Book flights with voice commands
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-foreground mr-2 flex-shrink-0" />
                    Manage social media with AI
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-foreground mr-2 flex-shrink-0" />
                    Diagnose network issues automatically
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12 lg:col-span-4 animate-fade-in-up animate-delay-200 group">
              <Card className="linear-card bg-card rounded-lg h-full border-2 border-white/20 hover:border-white/30 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                    <Plug className="w-6 h-6 text-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    Universal Compatibility
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Connect to any existing service - REST, GraphQL, legacy
                    systems. We adapt to the market as it is.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-foreground mr-2 flex-shrink-0" />
                    Expedia integration
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-foreground mr-2 flex-shrink-0" />
                    Banking APIs
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-foreground mr-2 flex-shrink-0" />
                    Legacy enterprise systems
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-5 animate-fade-in-up animate-delay-300 group">
              <Card className="linear-card bg-card rounded-lg h-full border-2 border-white/20 hover:border-white/30 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-foreground" />
                  </div>
                  <CardTitle className="text-foreground">
                    Partner Ecosystem
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Our MCP/API framework lets companies integrate seamlessly.
                    White-label solutions with auto-generated SDKs.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3 animate-fade-in-up animate-delay-400 group">
              <Card className="linear-card bg-card rounded-lg h-full border-2 border-white/20 hover:border-white/30 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-foreground" />
                  </div>
                  <CardTitle className="text-foreground">
                    Developer Tools
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Complete SDK suite with documentation and examples for rapid
                    integration.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 animate-fade-in-up animate-delay-500 group">
              <Card className="linear-card bg-card rounded-lg h-full border-2 border-white/20 hover:border-white/30 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-foreground" />
                  </div>
                  <CardTitle className="text-foreground">
                    Enterprise Ready
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Scale from prototype to production with enterprise-grade
                    security and compliance.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge
              variant="secondary"
              className="bg-background text-foreground border-2 border-white/20 rounded-full px-4 py-1.5 font-medium mb-6"
            >
              <Zap className="w-4 h-4 mr-2" />
              The Smart Card Revolution
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance mb-6 text-foreground">
              From App Chaos to Card Clarity
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              See how Smart Cards transform the overwhelming mobile experience
              into something beautiful and functional
            </p>
          </div>

          {/* Main Comparison */}
          <div className="grid lg:grid-cols-3 gap-12 items-center mb-20">
            {/* Before Section */}
            <div className="text-center animate-fade-in-left">
              <h3 className="text-2xl font-bold mb-4 text-destructive flex items-center justify-center">
                Before: App Chaos
              </h3>
              <div className="iphone-mockup mx-auto w-64 h-[480px] mb-6">
                <div className="iphone-notch"></div>
                <div className="iphone-screen phone-screen-scrollable h-full pt-12 pb-8 px-4">
                  <div
                    className="grid grid-cols-6 gap-2 h-full content-start"
                    style={{ minHeight: 'calc(100% + 150px)' }}
                  >
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center shadow-sm bg-muted"
                      >
                        <div className="w-4 h-4 bg-white/30 rounded-md"></div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-destructive/10 to-transparent rounded-2xl pointer-events-none mt-12 mb-8" />
                </div>
                <div className="iphone-home-indicator"></div>
              </div>

              {/* Problem Stats */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center text-destructive">
                  <span className="font-semibold">100+ apps</span>
                  <span className="mx-2">•</span>
                  <span>cluttering your phone</span>
                </div>
                <div className="flex items-center justify-center text-muted-foreground">
                  <span>Average user switches apps</span>
                  <span className="font-bold text-destructive mx-1">300x</span>
                  <span>per day</span>
                </div>
                <div className="flex items-center justify-center text-muted-foreground">
                  <span>Wasted time:</span>
                  <span className="font-bold text-destructive mx-1">
                    2.5 hours
                  </span>
                  <span>daily</span>
                </div>
              </div>
            </div>

            {/* Transformation Arrow */}
            <div className="flex flex-col items-center justify-center animate-scale-in animate-delay-200">
              <div className="w-16 h-16 bg-gradient-to-r from-destructive to-foreground rounded-full flex items-center justify-center mb-4 shadow-lg">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-foreground mb-1">
                  Smart Card
                </div>
                <div className="text-xs text-muted-foreground">
                  Transformation
                </div>
              </div>
            </div>

            {/* After Section */}
            <div className="text-center animate-fade-in-right">
              <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center justify-center">
                After: Smart Cards
              </h3>
              <div className="iphone-mockup mx-auto w-64 h-[480px] mb-6">
                <div className="iphone-notch"></div>
                <div className="iphone-screen phone-screen-scrollable h-full pt-12 pb-8 px-4">
                  <div className="bento-grid h-full">
                    <div className="bento-item-1 phone-card rounded-xl p-4 flex items-center">
                      <Brain className="w-10 h-10 text-foreground mr-4 flex-shrink-0" />
                      <div>
                        <div className="text-lg font-bold text-foreground">
                          AI Assistant
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Ready to help with anything
                        </div>
                      </div>
                    </div>
                    <div className="bento-item-2 phone-card rounded-xl p-3 flex flex-col justify-center items-center text-center">
                      <Plane className="w-6 h-6 text-foreground mb-1" />
                      <div className="text-xs font-semibold text-foreground">
                        Travel
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Book trips
                      </div>
                    </div>
                    <div className="bento-item-3 phone-card rounded-xl p-3 flex flex-col justify-center items-center text-center">
                      <Heart className="w-6 h-6 text-foreground mb-1" />
                      <div className="text-xs font-semibold text-foreground">
                        Health
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Wellness
                      </div>
                    </div>
                    <div className="bento-item-4 phone-card rounded-xl p-3 flex items-center">
                      <Home className="w-6 h-6 text-foreground mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-foreground">
                          Smart Home
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Control devices
                        </div>
                      </div>
                    </div>
                    <div className="bento-item-5 phone-card rounded-xl p-3 flex flex-col justify-center items-center text-center">
                      <Calendar className="w-5 h-5 text-foreground mb-1" />
                      <div className="text-xs font-semibold text-foreground">
                        Cal
                      </div>
                    </div>
                    <div className="bento-item-6 phone-card rounded-xl p-3 flex flex-col justify-center items-center text-center">
                      <Building2 className="w-6 h-6 text-foreground mb-1" />
                      <div className="text-xs font-semibold text-foreground">
                        Finance
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Banking
                      </div>
                    </div>
                    <div className="bento-item-7 phone-card rounded-xl p-3 flex items-center">
                      <Shield className="w-5 h-5 text-foreground mr-2 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-foreground">
                          Settings
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Privacy
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="iphone-home-indicator"></div>
              </div>

              {/* Solution Stats */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center text-foreground">
                  <span className="font-semibold">5 dynamic cards</span>
                  <span className="mx-2">•</span>
                  <span>infinite possibilities</span>
                </div>
                <div className="flex items-center justify-center text-muted-foreground">
                  <span>Reduce app switching by</span>
                  <span className="font-bold text-foreground mx-1">90%</span>
                </div>
                <div className="flex items-center justify-center text-muted-foreground">
                  <span>Save time:</span>
                  <span className="font-bold text-foreground mx-1">
                    2+ hours
                  </span>
                  <span>daily</span>
                </div>
              </div>
            </div>
          </div>

          {/* User Testimonial */}
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance text-foreground">
              Available Across Platforms
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Start today, scale tomorrow
            </p>
          </div>

          <div className="space-y-16">
            {/* Platform Timeline */}
            <div className="relative animate-fade-in-up animate-delay-100">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-foreground via-foreground/50 to-transparent"></div>

              <div className="space-y-12">
                {/* Android - Available Now */}
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8 text-right animate-fade-in-left">
                    <Card className="linear-card bg-card rounded-lg border-2 border-white/20 hover:border-white/30 transition-all duration-300 group">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-end space-x-4 mb-4">
                          <div>
                            <CardTitle className="text-foreground text-xl">
                              Android App
                            </CardTitle>
                            <CardDescription className="text-muted-foreground">
                              Native Android experience
                            </CardDescription>
                          </div>
                          <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center border border-green-500/30">
                            <Bot className="w-8 h-8 text-green-400" />
                          </div>
                        </div>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center justify-end text-muted-foreground">
                            <span>50,000+ downloads</span>
                            <CheckCircle className="w-4 h-4 text-green-400 ml-2" />
                          </div>
                          <div className="flex items-center justify-end text-muted-foreground">
                            <span>4.8★ rating on Play Store</span>
                            <Star className="w-4 h-4 text-yellow-400 ml-2" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex justify-end">
                          <Button className="linear-button-primary rounded-lg font-medium px-6">
                            Download Now
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-4 border-background z-10"></div>

                  <div className="flex-1 pl-8">
                    <div className="bg-green-400/10 rounded-lg p-4 border border-green-400/20">
                      <Badge className="bg-green-400 text-green-900 rounded-full px-3 py-1 font-medium mb-2">
                        Available Now
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Full feature set including AI integrations, smart cards,
                        and real-time sync across devices.
                      </p>
                    </div>
                  </div>
                </div>

                {/* iOS - Coming Soon */}
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8">
                    <div className="bg-blue-400/10 rounded-lg p-4 border border-blue-400/20">
                      <Badge className="bg-blue-400 text-blue-900 rounded-full px-3 py-1 font-medium mb-2">
                        Coming Q2 2025
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Native iOS experience with seamless iCloud integration
                        and Siri shortcuts support.
                      </p>
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                          <span>Development Progress</span>
                          <span>75%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div
                            className="bg-blue-400 h-2 rounded-full"
                            style={{ width: '75%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-background z-10"></div>

                  <div className="flex-1 pl-8 animate-fade-in-right">
                    <Card className="linear-card bg-card rounded-lg border-2 border-white/20 hover:border-white/30 transition-all duration-300 group">
                      <CardHeader className="pb-4">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                            <Apple className="w-8 h-8 text-blue-400" />
                          </div>
                          <div>
                            <CardTitle className="text-foreground text-xl">
                              iOS App
                            </CardTitle>
                            <CardDescription className="text-muted-foreground">
                              Premium iOS experience
                            </CardDescription>
                          </div>
                        </div>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                            <span>Beta testing with 1,000+ users</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                            <span>App Store review in progress</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Button
                          variant="outline"
                          className="rounded-lg font-medium px-6 border-white/20 hover:border-white/30 bg-transparent"
                        >
                          Join Beta Waitlist
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Future AI-OS */}
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8 text-right animate-fade-in-left">
                    <Card className="linear-card bg-card rounded-lg border-2 border-white/20 hover:border-white/30 transition-all duration-300 group">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-end space-x-4 mb-4">
                          <div>
                            <CardTitle className="text-foreground text-xl">
                              Future AI-OS
                            </CardTitle>
                            <CardDescription className="text-muted-foreground">
                              Next-generation platform
                            </CardDescription>
                          </div>
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                            <Brain className="w-8 h-8 text-purple-400" />
                          </div>
                        </div>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center justify-end text-muted-foreground">
                            <span>Research & Development</span>
                            <Sparkles className="w-4 h-4 text-purple-400 ml-2" />
                          </div>
                          <div className="flex items-center justify-end text-muted-foreground">
                            <span>Partnership with AI leaders</span>
                            <Users className="w-4 h-4 text-purple-400 ml-2" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex justify-end">
                          <Button
                            variant="outline"
                            className="rounded-lg font-medium px-6 border-white/20 hover:border-white/30 bg-transparent"
                          >
                            Stay Updated
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-4 border-background z-10"></div>

                  <div className="flex-1 pl-8">
                    <div className="bg-purple-400/10 rounded-lg p-4 border border-purple-400/20">
                      <Badge className="bg-purple-400 text-purple-900 rounded-full px-3 py-1 font-medium mb-2">
                        Future Vision
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Preparing for the next generation of AI-native operating
                        systems and ambient computing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up animate-delay-300">
              <div className="text-center p-6 bg-card rounded-lg border border-white/20">
                <div className="text-2xl font-bold text-foreground mb-1">
                  50K+
                </div>
                <div className="text-sm text-muted-foreground">
                  Active Users
                </div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-white/20">
                <div className="text-2xl font-bold text-foreground mb-1">
                  99.9%
                </div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-white/20">
                <div className="text-2xl font-bold text-foreground mb-1">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">
                  Integrations
                </div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-white/20">
                <div className="text-2xl font-bold text-foreground mb-1">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="developers" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance text-foreground">
              Build with Smart Card
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Three integration paths for developers and partners
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-8 lg:col-span-7 animate-fade-in-up animate-delay-100 group">
              <Card className="linear-card bg-card rounded-lg h-full border-2 border-white/20 hover:border-white/30 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-foreground" />
                  </div>
                  <CardTitle className="text-foreground">REST API</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Standard REST endpoints for quick integration with
                    comprehensive documentation and examples.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="col-span-12 md:col-span-4 lg:col-span-5 animate-fade-in-up animate-delay-200 group">
              <Card className="linear-card bg-card rounded-lg h-full border-2 border-white/20 hover:border-white/30 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-foreground" />
                  </div>
                  <CardTitle className="text-foreground">
                    MCP Framework
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Advanced protocol for deep platform integration
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="col-span-12 animate-fade-in-up animate-delay-300 group">
              <Card className="linear-card bg-card rounded-lg border-2 border-white/20 hover:border-white/30 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-foreground" />
                  </div>
                  <CardTitle className="text-foreground">
                    White Label Solutions
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Complete branded solutions for enterprises with custom
                    theming, dedicated support, and enterprise-grade SLAs.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          <div className="text-center animate-fade-in-up animate-delay-400">
            <Button
              size="lg"
              className="linear-button-primary rounded-lg font-medium px-8"
            >
              Get API Access
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-background" />
                </div>
                <span className="text-xl font-bold text-foreground">
                  Smart Card
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Transforming mobile experiences with AI-powered integration
                cards.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Developers</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    API Docs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    SDKs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Examples
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">
                © 2025 Smart Card. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mr-1" />
                    10,000+ Integrations Ready
                  </span>
                  <span className="flex items-center">
                    <Zap className="w-4 h-4 text-foreground mr-1" />3
                    Integration Methods
                  </span>
                  <span className="flex items-center">
                    <Brain className="w-4 h-4 text-foreground mr-1" />
                    AI-First Architecture
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
