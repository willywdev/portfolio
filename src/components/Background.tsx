export default function DotBackgroundDemo() {
	return (
		<div className="pointer-events-none top-0 left-0 h-dvh w-dvw dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] fixed inset-0 z-[-1]">
			<div className="absolute inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
		</div>
	);
}
