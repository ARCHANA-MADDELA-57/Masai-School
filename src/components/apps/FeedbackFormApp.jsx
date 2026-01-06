import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({ name: '', email: '', feedback: '' });
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(formData);
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader><CardTitle>Feedback Form</CardTitle></CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input placeholder="Name" onChange={(e) => setFormData({...formData, name: e.target.value})} />
          <Input type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
          <Textarea placeholder="Your Feedback" onChange={(e) => setFormData({...formData, feedback: e.target.value})} />
          <Button type="submit" className="w-full">Submit</Button>
        </form>

        {submitted && (
          <div className="mt-6 p-4 bg-slate-100 rounded">
            <h4 className="font-bold">Submitted Data:</h4>
            <p>Name: {submitted.name}</p>
            <p>Email: {submitted.email}</p>
            <p>Feedback: {submitted.feedback}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}