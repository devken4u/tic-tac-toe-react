import Button from "./Button";

export default function CustomButton() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 h-svh">
      <Button className="bg-blue-500 ">Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button>Button 4</Button>
    </div>
  );
}
