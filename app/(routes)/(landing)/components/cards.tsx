"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Joel",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best chatbot application I've ever used!"
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Designer",
    description: "I use this daily for asking  my customer support questions !"
  },
  {
    name: "Mark",
    avatar: "M",
    title: "Student",
    description:
      "This app has changed my life, cannot imagine working without it!"
  },
  {
    name: "Mary",
    avatar: "M",
    title: "CFO",
    description: "The best in  app , definitely worth the premium subscription!"
  }
];

const Cards = () => {

  return (
    <div className="px-10">
      <div className="flex justify-center flex-col py-[3rem]">
        <h2 className="text-center text-4xl  font-extrabold mb-3">
          Ask Anything in Seconds
        </h2>
        <p className="text-center">AIGenius is here to help you </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="shadow-md   bg-gradient-to-r bg-blue-500 text-white"
          >
            
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-3 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cards