
import { ContentLayout } from '@/components/layouts/ContentLayout';

const About = () => {
  return (
    <ContentLayout>
      {/* Hero Section */}
      <div className="text-center mb-20 animate-fade-up">
        <h1 className="font-lora text-4xl md:text-5xl lg:text-6xl mb-6">
          Our <span className="text-gold">Story</span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          Crafting premium experiences through thoughtful design and quality materials.
        </p>
      </div>

      {/* Brand Story */}
      <div className="space-y-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-lora text-3xl text-gold">Our Beginning</h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                Founded in 2024, we set out to redefine what premium casual wear means. 
                Our journey began with a simple idea: create t-shirts that combine comfort 
                with sophistication.
              </p>
              <p>
                Every piece in our collection is thoughtfully designed and crafted using 
                the finest materials, ensuring both comfort and durability.
              </p>
            </div>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden">
            <img 
              src="/placeholder.svg"
              alt="Our workshop"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center md:grid-flow-dense">
          <div className="relative h-80 rounded-2xl overflow-hidden md:order-2">
            <img 
              src="/placeholder.svg"
              alt="Our values"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
          </div>
          <div className="space-y-6">
            <h2 className="font-lora text-3xl text-gold">Our Values</h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                Quality is at the heart of everything we do. From selecting the finest 
                materials to perfecting every stitch, we ensure each piece meets our 
                exacting standards.
              </p>
              <p>
                Sustainability isn't just a buzzword for us—it's a commitment. We're 
                dedicated to reducing our environmental impact while creating products 
                that last.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Appreciation */}
      <div className="mt-32">
        <h2 className="font-lora text-3xl text-center mb-12">
          Worn by <span className="text-gold">You</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-xl overflow-hidden bg-white/5 relative group"
            >
              <img
                src="/placeholder.svg"
                alt={`Customer ${i}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </ContentLayout>
  );
};

export default About;
