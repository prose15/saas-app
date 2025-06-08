import CompanionCard from "@/components/CompanionCard"
import CompanionList from "@/components/CompanionList"
import CTA from "@/components/CTA"
import { recentSessions } from "@/constants"

const Page = () => {
  return (
    <main>
      <h1>Dashboard</h1>

      <section className='home-section'>
        <CompanionCard 
        id= "123"
        name="Neural Network of the Brain"
        color="#ffff00"
        topic="Neura the Brainy Explorer"
        subject="science"
        duration={45}/>
        <CompanionCard 
        id= "456"
        name="Countsy the Number Wizard"
        color="#FE347E"
        topic="Derivatives & Integrals"
        subject="Maths"
        duration={30}/>
        <CompanionCard 
        id= "123"
        name="Verba the Vocabulary Builder"
        color="#00ffff"
        topic="Language"
        subject="English Literature"
        duration={30}/>
      </section>

      <section className="home-section">
        <CompanionList
        title="Recently completed session"
        companions={recentSessions}
        className="w-2/3 max-lg:w-full"
        />
        <CTA/>
      </section>
    </main>
  )
}

export default Page