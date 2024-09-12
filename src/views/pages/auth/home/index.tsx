import { Checkbox } from "@views/components/ui/check";
import { LayoutRoot } from "@views/pages/Layout/layoutRoot";

export function HomeTaks() {
  return (
    <LayoutRoot>
      <div className="flex flex-col p-6">
        <h1 className="text-xl font-bold">Tasks do dia </h1>

        <ul className="mt-8 flex flex-col gap-4">
          {[...Array(5)].map((_, index) => (
            <li className="inline-flex h-12 gap-4" key={index}>
              <Checkbox key={index} id={index.toString()} />
              <label
                htmlFor={index.toString()}
                className="text-lg font-bold text-gray-800"
              >
                Tasks

                {index}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </LayoutRoot>
  );
}
