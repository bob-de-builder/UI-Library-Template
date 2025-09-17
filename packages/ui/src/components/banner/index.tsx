import { useEffect, useState } from 'react';

interface BannerTypes {
  type?: 'gray' | 'info' | 'warning' | 'success' | 'danger';
}

interface BannerProps extends BannerTypes {
  title?: React.ReactNode;
  description?: React.ReactNode;
  showIcon?: boolean;
  showCloseButton?: boolean;
  bottomNode?: React.ReactNode;
  sideNode?: React.ReactNode;
  open: boolean;
  onClose?: () => void;
}

const Icon = ({ type }: BannerTypes) => {
  if (type === 'gray') {
    return (
      <svg
        fill="none"
        height="20"
        viewBox="0 0 20 20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM14.78 7.7L9.11 13.37C8.97 13.51 8.78 13.59 8.58 13.59C8.38 13.59 8.19 13.51 8.05 13.37L5.22 10.54C4.93 10.25 4.93 9.77 5.22 9.48C5.51 9.19 5.99 9.19 6.28 9.48L8.58 11.78L13.72 6.64C14.01 6.35 14.49 6.35 14.78 6.64C15.07 6.93 15.07 7.4 14.78 7.7Z"
          fill="#79818C"
        />
      </svg>
    );
  } else if (type === 'info') {
    return (
      <svg
        fill="#70B6F6"
        height="24"
        stroke="#70B6F6"
        strokeWidth="0"
        viewBox="0 0 16 16"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"></path>
      </svg>
    );
  } else if (type === 'warning') {
    return (
      <svg
        fill="none"
        height="20"
        viewBox="0 0 20 20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.99984 1.66663C5.40817 1.66663 1.6665 5.40829 1.6665 9.99996C1.6665 14.5916 5.40817 18.3333 9.99984 18.3333C14.5915 18.3333 18.3332 14.5916 18.3332 9.99996C18.3332 5.40829 14.5915 1.66663 9.99984 1.66663ZM9.37484 6.66663C9.37484 6.32496 9.65817 6.04163 9.99984 6.04163C10.3415 6.04163 10.6248 6.32496 10.6248 6.66663V10.8333C10.6248 11.175 10.3415 11.4583 9.99984 11.4583C9.65817 11.4583 9.37484 11.175 9.37484 10.8333V6.66663ZM10.7665 13.65C10.7248 13.7583 10.6665 13.8416 10.5915 13.925C10.5082 14 10.4165 14.0583 10.3165 14.1C10.2165 14.1416 10.1082 14.1666 9.99984 14.1666C9.8915 14.1666 9.78317 14.1416 9.68317 14.1C9.58317 14.0583 9.4915 14 9.40817 13.925C9.33317 13.8416 9.27484 13.7583 9.23317 13.65C9.1915 13.55 9.1665 13.4416 9.1665 13.3333C9.1665 13.225 9.1915 13.1166 9.23317 13.0166C9.27484 12.9166 9.33317 12.825 9.40817 12.7416C9.4915 12.6666 9.58317 12.6083 9.68317 12.5666C9.88317 12.4833 10.1165 12.4833 10.3165 12.5666C10.4165 12.6083 10.5082 12.6666 10.5915 12.7416C10.6665 12.825 10.7248 12.9166 10.7665 13.0166C10.8082 13.1166 10.8332 13.225 10.8332 13.3333C10.8332 13.4416 10.8082 13.55 10.7665 13.65Z"
          fill="#FFC700"
        />
      </svg>
    );
  } else if (type === 'success') {
    return (
      <svg
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
          fill="#00D488"
        />
      </svg>
    );
  } else {
    return (
      <svg
        fill="none"
        height="20"
        viewBox="0 0 20 20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.99984 1.66663C5.40817 1.66663 1.6665 5.40829 1.6665 9.99996C1.6665 14.5916 5.40817 18.3333 9.99984 18.3333C14.5915 18.3333 18.3332 14.5916 18.3332 9.99996C18.3332 5.40829 14.5915 1.66663 9.99984 1.66663ZM9.37484 6.66663C9.37484 6.32496 9.65817 6.04163 9.99984 6.04163C10.3415 6.04163 10.6248 6.32496 10.6248 6.66663V10.8333C10.6248 11.175 10.3415 11.4583 9.99984 11.4583C9.65817 11.4583 9.37484 11.175 9.37484 10.8333V6.66663ZM10.7665 13.65C10.7248 13.7583 10.6665 13.8416 10.5915 13.925C10.5082 14 10.4165 14.0583 10.3165 14.1C10.2165 14.1416 10.1082 14.1666 9.99984 14.1666C9.8915 14.1666 9.78317 14.1416 9.68317 14.1C9.58317 14.0583 9.4915 14 9.40817 13.925C9.33317 13.8416 9.27484 13.7583 9.23317 13.65C9.1915 13.55 9.1665 13.4416 9.1665 13.3333C9.1665 13.225 9.1915 13.1166 9.23317 13.0166C9.27484 12.9166 9.33317 12.825 9.40817 12.7416C9.4915 12.6666 9.58317 12.6083 9.68317 12.5666C9.88317 12.4833 10.1165 12.4833 10.3165 12.5666C10.4165 12.6083 10.5082 12.6666 10.5915 12.7416C10.6665 12.825 10.7248 12.9166 10.7665 13.0166C10.8082 13.1166 10.8332 13.225 10.8332 13.3333C10.8332 13.4416 10.8082 13.55 10.7665 13.65Z"
          fill="#F04248"
        />
      </svg>
    );
  }
};

export const Banner = ({
  type = 'info',
  title,
  description,
  open,
  showCloseButton,
  bottomNode,
  sideNode,
  onClose,
  showIcon = true,
}: BannerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  let bgColor = '';
  let stripeColor = '';
  switch (type) {
    case 'gray':
      bgColor = '#eeeef0';
      stripeColor = '#79818c';
      break;
    case 'info':
      bgColor = '#ebf5fd';
      stripeColor = '#70B6F6';
      break;
    case 'warning':
      bgColor = '#fff8df';
      stripeColor = '#ffc700';
      break;
    case 'success':
      bgColor = '#e0f9f0';
      stripeColor = '#49e0aa';
      break;
    case 'danger':
      bgColor = '#fde8e9';
      stripeColor = '#f3777c';
      break;
    default:
      bgColor = '#eeeef0';
      stripeColor = '#79818c';
      break;
  }

  function handleClose() {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="w-full shadow-lg transform flex items-center rounded-md"
      style={{
        background: bgColor || '#ebf5fd',
      }}
    >
      <div
        className="flex-none absolute rounded-l-[2px] rounded-l-4px h-[4px] w-full top-0"
        style={{
          background: stripeColor || '#70B6F6',
        }}
      />

      <div className="w-full gap-3 h-full flex flex-row justify-between px-4 md:px-4 py-3 md:py-4">
        <div className="flex flex-row gap-2.5 items-start w-full h-full">
          {showIcon && (
            <div className="h-full flex justify-end">
              <Icon type={type} />
            </div>
          )}

          <div className="w-full gap-3 h-full flex flex-col md:flex-row items-start justify-between">
            <div className="flex-1 gap-3 h-full flex flex-col items-start justify-between">
              {(title || description) && (
                <div>
                  {title && (
                    <div className="text-sm font-bold text-[#191919]">
                      {title}
                    </div>
                  )}
                  {description && (
                    <div className="text-sm font-normal text-[#5D5D5D] mt-1">
                      {description}
                    </div>
                  )}
                </div>
              )}

              {bottomNode}
            </div>
            {sideNode}
          </div>
        </div>

        {showCloseButton && (
          <div className="w-1/10 h-full flex flex-col justify-start items-center">
            <button onClick={handleClose}>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.3335 3.33337L12.6662 12.6661"
                  stroke="#191919"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M3.33429 12.6661L12.667 3.33337"
                  stroke="#191919"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
