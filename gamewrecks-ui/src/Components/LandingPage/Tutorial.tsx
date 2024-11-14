import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";

const steps = [
  {
    title: "Step 1",
    subTitle: "Add your Steam user account",
  },
  {
    title: "Step 2",
    subTitle: "Validate your account",
  },
  {
    title: "Step 3",
    subTitle: "Head to the dashboard, Enjoy!",
  },
];
export default function Tutorial() {
  return (
    <>
      <h2 className="text-4xl font-bold text-white text-center mb-6">
        How does it work?
      </h2>
      <div className="grid grid-cols-1 gap-10 w-full">
        {steps.map((step) => (
          <Card
            className="bg-neutral-900 text-white border-neutral-800 w-full max-w-2xl mx-auto"
            key={step.title}
          >
            <CardHeader>
              <CardTitle className="text-2xl">{step.title}</CardTitle>
              <CardDescription className="text-slate-300">
                {step.subTitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Insert Gif</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
