import Image from 'next/image'

interface Props {};

const Avatar: React.FunctionComponent<Props> = () => {
    return (
        <div className="flex-1">
            <Image
                src="/img/avatar.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
            />
        </div>
    )
};

export default Avatar;
