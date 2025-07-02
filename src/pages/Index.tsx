import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, TrendingUp, Target, MessageCircle, Clock } from "lucide-react";

const Index = () => {
  const airtableUrl = "https://getwaitlist.com/waitlist/29790?ref_id=UC4V3XMGD";

  const handleCTAClick = () => {
    window.open(airtableUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Bracket</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            </nav>
            <Button 
              onClick={handleCTAClick}
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-md transition-colors"
            >
              Start Here
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight">
            Understand money.<br/>Build wealth.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            The modern way to learn personal finance and take control of your financial future.
          </p>
          <Button 
            onClick={handleCTAClick}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg rounded-md transition-colors mb-8"
          >
            Start Learning
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-gray-500">
            Join thousands of learners transforming how they think about money.
          </p>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Coming soon.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're building something powerful — and simple.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-16 text-center">
            What to expect
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Interactive learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Engage with dynamic content that adapts to your learning style and pace.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Wealth-building tools</h3>
              <p className="text-gray-600 leading-relaxed">
                Practical calculators and frameworks to help you make smart financial decisions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Personalized goals</h3>
              <p className="text-gray-600 leading-relaxed">
                Set and track financial milestones tailored to your unique situation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Expert guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn from certified financial professionals and industry experts.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Community support</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with like-minded learners on the same wealth-building journey.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Clock className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Quick progress</h3>
              <p className="text-gray-600 leading-relaxed">
                See meaningful results in your financial knowledge within weeks, not months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-16 text-center">
            Trusted by thousands
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2">50,000+</div>
              <p className="text-gray-600">Active learners</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2">$2.5M+</div>
              <p className="text-gray-600">In wealth generated</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2">95%</div>
              <p className="text-gray-600">Success rate</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2">24/7</div>
              <p className="text-gray-600">Community support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Start learning. Free.
          </h2>
          <div className="mb-12">
            <ul className="text-lg text-gray-600 space-y-3 max-w-md mx-auto">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                No credit card required
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                Instant access to foundational tools
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                Join a growing community building wealth together
              </li>
            </ul>
          </div>
          <Button 
            onClick={handleCTAClick}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg rounded-md transition-colors mb-6"
          >
            Join Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-gray-500">
            Free to get started • No commitment
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="font-bold text-xl text-gray-900 mb-4">Bracket</div>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Financial independence through knowledge, tools, and community.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Wealth Builder</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Tools</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 text-gray-600 mb-4 md:mb-0">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Support</a>
            </div>
            <p className="text-gray-500">
              © 2024 Bracket. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
