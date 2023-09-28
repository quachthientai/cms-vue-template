import { PropType, ComponentObjectPropsOptions } from "vue"

type PropOptions<T> = {
   type: PropType<T>;
   required?: boolean;
   default?: T | null | undefined | (() => T | null | undefined);
   validator?(value: unknown): boolean;
};
 
type PropsOptions<Props> = {
   [K in keyof Props] : PropOptions<Props[K]>;
}

export default function makePropsFactory(vProps: PropsOptions<Object>) : ComponentObjectPropsOptions {
   return vProps as ComponentObjectPropsOptions;
}





