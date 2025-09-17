"use client";

import { Button } from "@bob/ui";
import { JSX } from "react";

export const SecondaryButton = (): JSX.Element => {
  return (
    <div className="">
      <div className="flex flex-col gap-4 my-4">
        <div className="flex gap-3 my-1">
          <Button size="sm" intent="secondary">
            Secondary sm
          </Button>
          <Button size="md" isLoading intent="secondary">
            Secondary md
          </Button>
          <Button size="md" intent="secondary">
            Secondary md
          </Button>
          <Button size="lg" intent="secondary">
            Secondary lg
          </Button>
        </div>
      </div>
    </div>
  );
};
export const PrimaryButton = (): JSX.Element => {
  return (
    <div className="">
      <div className="flex flex-col gap-4 my-4">
        <div className="flex gap-3 my-1">
          <Button size="sm" intent="primary">
            Primary sm
          </Button>
          <Button size="md" isLoading intent="primary">
            Primary md
          </Button>
          <Button size="md" intent="primary">
            Primary md
          </Button>
          <Button size="lg" intent="primary">
            Primary lg
          </Button>
        </div>
      </div>
    </div>
  );
};

export const OutlinedButton = (): JSX.Element => {
  return (
    <div className="">
      <div className="flex flex-col gap-4 my-4">
        <div className="flex gap-3 my-1">
          <Button size="sm" intent="outline">
            Outlined sm
          </Button>
          <Button size="md" isLoading intent="outline">
            Outlined md
          </Button>
          <Button size="md" intent="outline">
            Outlined md
          </Button>
          <Button size="lg" intent="outline">
            Outlined lg
          </Button>
        </div>
      </div>
    </div>
  );
};

export const DangerdButton = (): JSX.Element => {
  return (
    <div className="">
      <div className="flex flex-col gap-4 my-4">
        <div className="flex gap-3 my-1">
          <Button size="sm" intent="danger">
            Danger sm
          </Button>
          <Button size="md" isLoading intent="danger">
            Danger md
          </Button>
          <Button size="md" intent="danger">
            Danger md
          </Button>
          <Button size="lg" intent="danger">
            Danger lg
          </Button>
        </div>
      </div>
    </div>
  );
};

// export const DangerOutlineddButton = (): JSX.Element => {
//   return (
//     <div className="">
//       <div className="flex flex-col gap-4 my-4">
//         <div className="flex gap-3 my-1">
//           <Button size="sm" intent="danger-outlined">
//             Danger outlined sm
//           </Button>
//           <Button size="md" isLoading intent="danger-outlined">
//             Danger outlined md
//           </Button>
//           <Button size="md" intent="danger-outlined">
//             Danger outlined md
//           </Button>
//           <Button size="lg" intent="danger-outlined">
//             Danger outlined lg
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };
