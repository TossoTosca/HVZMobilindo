import useScroll from "./useScroll";

export default function useNavbar() {
    const { scrollY, isScrolled } = useScroll();

    return {
        scrollY,
        isScrolled,
    };
}