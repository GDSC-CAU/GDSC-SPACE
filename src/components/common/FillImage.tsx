/* eslint-disable jsx-a11y/alt-text */
import Image, { type ImageProps } from 'next/image'

interface FillImageProps extends Omit<ImageProps, 'style' | 'fill' | 'width' | 'height'> {
    /**
     * class name for image container
     */
    containerClass?: string
    /**
     * class name for image
     */
    imageClass?: string
}

export const FillImage = ({ containerClass, imageClass, ...nextImageProps }: FillImageProps) => (
    <div className={`relative ${containerClass}`}>
        <Image
            fill
            className={`${imageClass} h-full w-full`}
            style={{
                objectFit: 'cover',
            }}
            {...nextImageProps}
        />
    </div>
)
