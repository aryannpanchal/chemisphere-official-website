import React from 'react'
import Image from "next/image"
const Testimonials = () => {
    const testimonials = [
        {
            avatar: "/manasvi.svg",
            name: "Manasvi Patil",
            title: "MHTCET 2023",
            subtitle: "99.3 Percentile",
            title2: "CBSE 2023 Chemistry",
            subtitle2: "95 percentile",
            title3: "NEET 2023",
            subtitle3: "93.4 Percentile",
            quote: "Hi, I am Manasvi Patil. I scored 93.4 percentile in NEET and 99.3 percentile in MHTCET Chemistry section. I give all my credits to Chandan sir and chemisphere. Besides teaching all the syllabus related topics in great detail, Chandan sir also enhanced and deepened my interest in chemistry. Rather than being a barrier, the online mode ensures flexible class time is multiple doubt solving sessions and also ensures having enough practice which is a must to improve time and speed in competitive examinations. Thus I recommend you to join Chemisphere without a second, third. It's a choice you won't regret.  "
        },
        {
            avatar: "/vivansh.svg",
            name: "Vivansh Gandhi",
            title: "JEE Main 2023",
            subtitle: "99.2 Percentile",
            title2: "JEE Main 2023",
            subtitle2: "98.9 Percentile",
            title3: "MHTCET 2023",
            subtitle3: "99.321 Percentile",
            quote: "Hi, my name is Vivansh. I got 98.9 Percentile in JEE Mains and 99 Percentile in Chemistry and in MHTCET I got 99.321 Percentile. I have been learning from Chandan sir since one year and I love everything about the class. The class is very interesting and very enjoyable and also you learn at the same time. I owe all my Chemistry marks to Chandan sir and I am very grateful I found him. So yes, I recommend everyone to join this Chemisphere"
        },
        {
            avatar: "/tanisha.svg",
            name: "Tanisha Mondal",
            title: "Student in Class 11",
            quote: "My name is Tanisha Mondal. I study in class 11. My 10th percentage was 98.2%. I got to know about Chandan sir from many others so I joined his class. The fact is that earlier I used to dislike chemistry but now I do chemistry already because I have fallen in love with the subject so the credit goes to Chandan sir to make me feel loved with the subject. I really like the test system because I can check about my concepts whether they are clear or not. Also serve clears the doubt and I can also solve difficult questions which is really very helpful for me. "
        },
    ]
  return (
    <div>
   <section className="py-14 bg-slate-900">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl sm:text-center md:mx-auto">
                    <h3 className="text-gray-100 text-4xl font-semibold sm:text-5xl">
                        Hall of Fame
                    </h3>
                    <p className="mt-3 text-gray-200">
                     Explore our hall of academic achievers, charting the course for success and inspiring the pursuit of knowledge at its finest.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx} className="bg-gray-100 p-4 rounded-xl">
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                            <Image src={item.avatar} className=" rounded-full" width={64} height={64} alt="logos" />
                                            <div>
                                                <span className="block text-gray-900 font-semibold">{item.name}</span>
                                                <span className="block text-gray-900 text-sm mt-0.5">{item.title} <span className="font-bold">{item.subtitle}</span></span>
                                                <span className="block text-gray-900 text-sm mt-0.5">{item.title2} <span className="font-bold">{item.subtitle2}</span></span>
                                                <span className="block text-gray-900 text-sm mt-0.5">{item.title3} <span className="font-bold">{item.subtitle3}</span></span>
                                                
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-gray-900 text-sm">
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Testimonials