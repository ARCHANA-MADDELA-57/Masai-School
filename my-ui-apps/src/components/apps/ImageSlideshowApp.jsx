import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  "https://via.placeholder.com/400x200?text=Image+1",
  "https://via.placeholder.com/400x200?text=Image+2",
  "https://via.placeholder.com/400x200?text=Image+3"
];

export default function ImageSlideshow() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardContent className="p-6 text-center">
        <img src={images[index]} alt="Slideshow" className="rounded-lg mb-4 w-full" />
        <div className="flex justify-between">
          <Button onClick={prev}>Previous</Button>
          <Button onClick={next}>Next</Button>
        </div>
      </CardContent>
    </Card>
  );
}