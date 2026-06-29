import Heading from "../typography/Heading";
import Text from "../typography/Text";

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
}

export default function SectionTitle({
    title,
    subtitle,
    align = "center",
}: SectionTitleProps) {
    return (
        <div
            className={
                align === "center"
                    ? "mx-auto mb-14 max-w-3xl text-center"
                    : "mb-14"
            }
        >
            <Heading as="h2" variant="section">
                {title}
            </Heading>

            {subtitle && (
                <Text
                    muted
                    className="mt-4"
                >
                    {subtitle}
                </Text>
            )}
        </div>
    );
}