import { Linkedin, Twitter } from 'lucide-react'

const team = [
  {
    name: "Alexandra Chen",
    role: "Managing Partner",
    bio: "Former Goldman Sachs VP with 15+ years in institutional finance. Pioneer in crypto custody solutions.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Marcus Webb",
    role: "Chief Technology Officer",
    bio: "Ex-Coinbase engineering lead. Built infrastructure handling $50B+ in transactions.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Sarah Kim",
    role: "Head of DeFi Strategy",
    bio: "DeFi researcher and protocol contributor. Advised on $200M+ in protocol deployments.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "David Okonkwo",
    role: "Director of Compliance",
    bio: "Former SEC examiner. Specializes in crypto regulatory frameworks across jurisdictions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
  }
]

function Team() {
  return (
    <section id="team" className="py-20 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the Experts
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Industry veterans combining decades of traditional finance experience with deep crypto expertise.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 card-hover text-center"
            >
              <div className="relative mb-4 mx-auto w-24 h-24">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-2 border-neutral-200 dark:border-neutral-700 group-hover:border-blue-500 transition-colors"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-neutral-800" />
              </div>
              <h3 className="font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">{member.role}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">{member.bio}</p>
              <div className="flex justify-center gap-3">
                <a href="#" className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
