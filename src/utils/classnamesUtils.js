import classNames from 'classnames';

export const getCategoryClasses = () => ({
  
})

export const getPostClasses = (index) => ({
  imageContainer: classNames('w-full bg-center object-cover rounded-lg', {
    'h-96': index < 2,
    'h-48': index >= 2,
  }),
  gradientOverlay: classNames('absolute inset-0 bg-gradient-to-t from-black/90 to-transparent', {
    'h-96': index < 2,
    'h-48': index >= 2,
    
  }),
  textContainer: classNames({
    'absolute bottom-8 px-6': index < 2,
    'relative top-6 px-6': index >= 2,
  }),
  categoryText: classNames('flex gap-2 mb-2 font-bold text-[11px]', {
    'uppercase text-blue-500': index === 0,
    'uppercase text-green-600': index === 1,
    'capitalize text-orange-600': index >= 2,
  }),
  headerText: classNames('font-bold', {
    'text-[35px] text-white': index < 2,
    'text-xl': index >= 2,
  }),
  metaText: classNames('flex text-[11px] font-light items-center pt-3', {
    'text-white': index < 2,
    'text-black mt-8': index >= 2,
  }),
});
