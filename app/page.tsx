import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl">
        <Button
          className={"w-[128px] p-4 hover:bg-blue-400"}
          variant={"secondary"}
        >
          Click me{" "}
        </Button>
      </h1>
    </div>
  );
}
