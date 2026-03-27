export default function Heading({
	title,
	className,
}: {
	title: string;
	className?: string;
}) {
	return (
		<h1
			className={`sub-heading font-medium font-NeueMontreal text-[#0C0C0C] ${className}`}>
			{title}
		</h1>
	);
}
