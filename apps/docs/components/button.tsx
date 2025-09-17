'use client';

import { Button } from '@bob-ui/ui';
import { JSX } from 'react';

export const SecondaryButton = (): JSX.Element => {
  return (
    <div className="">
      <div className="flex flex-col gap-4 my-4">
        <div className="flex gap-3 my-1">
          <Button intent="secondary" size="sm">
            Secondary sm
          </Button>
          <Button intent="secondary" isLoading size="md">
            Secondary md
          </Button>
          <Button intent="secondary" size="md">
            Secondary md
          </Button>
          <Button intent="secondary" size="lg">
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
          <Button intent="primary" size="sm">
            Primary sm
          </Button>
          <Button intent="primary" isLoading size="md">
            Primary md
          </Button>
          <Button intent="primary" size="md">
            Primary md
          </Button>
          <Button intent="primary" size="lg">
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
          <Button intent="outline" size="sm">
            Outlined sm
          </Button>
          <Button intent="outline" isLoading size="md">
            Outlined md
          </Button>
          <Button intent="outline" size="md">
            Outlined md
          </Button>
          <Button intent="outline" size="lg">
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
          <Button intent="danger" size="sm">
            Danger sm
          </Button>
          <Button intent="danger" isLoading size="md">
            Danger md
          </Button>
          <Button intent="danger" size="md">
            Danger md
          </Button>
          <Button intent="danger" size="lg">
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
