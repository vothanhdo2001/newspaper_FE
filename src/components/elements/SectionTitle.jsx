import Link from "next/link";

const SectionTitle = ({title, btnText, btnUrl, pClass}) => {
    return ( 
        <div className={`section-title ${pClass ?? "m-b-xs-40"}`}>
            <h2 className="axil-title">{title}</h2>
            <Link href={btnUrl ?? "#"}>
                <a className="btn-link">{btnText}</a>
            </Link>
        </div>
     );
}
 
export default SectionTitle;