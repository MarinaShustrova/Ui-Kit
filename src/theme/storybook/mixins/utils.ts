export const handleMixinBoxClick = (mixinName: string) => {
    window.navigator.clipboard.writeText(`@include mixins.${mixinName};`)
}
