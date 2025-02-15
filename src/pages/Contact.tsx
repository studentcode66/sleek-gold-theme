
import { ContentLayout } from '@/components/layouts/ContentLayout';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <ContentLayout>
      <div className="text-center mb-16 animate-fade-up">
        <h1 className="font-lora text-4xl md:text-5xl mb-6">Get in Touch</h1>
        <p className="text-white/60 max-w-2xl mx-auto">
          We're here to help and answer any question you might have.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-white/5 border-white/10 text-white"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-white/5 border-white/10 text-white"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                className="bg-white/5 border-white/10 text-white min-h-[150px]"
              />
            </div>
            <Button className="w-full btn-primary">Send Message</Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="font-lora text-2xl text-gold">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-gold mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-white/60">support@luxe.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-gold mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-white/60">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-gold mt-1" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-white/60">123 Fashion Street<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="aspect-video rounded-2xl overflow-hidden bg-white/5">
            <img
              src="/placeholder.svg"
              alt="Map location"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default Contact;
