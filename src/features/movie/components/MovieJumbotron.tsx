type Props = {
    src: string
}

const MovieJumbotron = ({ src }: Props) => {
    return (
        <div>
            <div className="md:min-h-[400px] w-full bg-contain" style={{ background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${src}), repeat: no-repeat`  }} />
        </div>
    );
}

export default MovieJumbotron;
