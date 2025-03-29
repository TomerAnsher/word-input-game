export type Listener<T> = (data: T) => void;

export type Events = {
    TYPE: string;
    BACKSPACE: void;
    ENTER: void;
  };
  
export type Status = "default" | "success" | "error"