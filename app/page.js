import Category from "@/components/Category";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";


export default function Home() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="flex-col w-full">
        <Header></Header>
        <Category></Category>
        <Hero></Hero>
      </div>
    </div>
  )
}
