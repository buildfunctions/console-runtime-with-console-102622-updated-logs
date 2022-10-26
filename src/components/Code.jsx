import cn from 'clsx'

export default function Code({ className, ...props }) {
    return (
        <code
            className={cn(
                'text-code text-base whitespace-pre-wrap before:content-["`"] after:content-["`"]',
                className
            )}
            {...props}
        />
    )
}