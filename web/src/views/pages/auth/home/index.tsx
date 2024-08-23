import { Label } from "@radix-ui/react-dropdown-menu";
import { Checkbox } from "@views/components/ui/check";
import { LayoutRoot } from "@views/pages/Layout/layoutRoot";

export function HomeTaks() {
  return (
    <LayoutRoot>
      <div className="flex flex-col p-6">
        <h1 className="text-xl font-bold">Tasks do dia </h1>

        <ul className="mt-8 flex flex-col gap-4">
          {[...Array(5)].map((item, index) => (
            <li className="inline-flex h-12 gap-4" key={index}>
              <Checkbox key={index} id={index} />
              <Label
                htmlFor={index}
                className="text-lg font-bold text-gray-800"
              >
                Tasks

                {index}
              </Label>
            </li>
          ))}
        </ul>
      </div>
    </LayoutRoot>
  );
}
