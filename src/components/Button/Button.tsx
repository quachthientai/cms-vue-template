import { defineComponent } from "vue";
import { makePropsFactory } from "@/utils/makePropFactory";
import { Ripple } from "@/directives/ripple";
import { useVariants, variantProps } from "@/composable/variants";
import { useSize, sizeProps } from "@/composable/size";
import { useColor, colorProps } from "@/composable/color";

const vButtonProps = makePropsFactory({
   block: Boolean,
   disabled: Boolean,
   loading: Boolean,
   appendIcon: String,
   prependIcon: String,
   ...variantProps,
   ...sizeProps,
   ...colorProps
});

const Button = defineComponent({
   name: 'Button',
   props: vButtonProps,
   directives: {
      'v-ripple': Ripple
   },
   setup(props, {attrs, slots}) {
      const variant = useVariants('btn', props.variant as string);
      const size = useSize('btn', props.size as string);
      const color = useColor('btn', props.color as string);

      return () => {
         return (
            <button 
               type="button"
               class={['btn',color, variant, size]}
               tabindex="0" 
               role="button">
                  
                  {slots.default?.()}
            </button>
         )
      }
   }
})

type ButtonType = InstanceType<typeof Button>;

export {
   Button,
   ButtonType
}