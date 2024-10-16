import DescriptionList from "@/app/components/CVPreview/Description/Description";
import { CertItemProps } from "@/app/components/CVPreview/CertItem/CertItem.types";
import DateRange from "@/app/components/DateRange/DateRange";
import LinkC from "@/app/components/LinkC/LinkC";

const CertItem = ({ cert }: CertItemProps) => (
  <div key={cert.id} className="flex flex-col gap-1">
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-xxs font-bold sm:text-xs"> {cert.course}</h3>
        <div className="text-xxs font-semibold italic sm:text-xs">
          {cert.institution}
        </div>
      </div>
      <div className="text-right">
        <DateRange end={cert.date_end} format="MMM yyyy" />
        {cert.verification && (
          <LinkC
            href={cert.verification}
            className="flex text-xxs sm:text-xs"
            external
          >
            Verification
          </LinkC>
        )}
      </div>
    </div>
    <DescriptionList
      content={cert.description.description_content}
      bullets={cert.description.bullets}
    />
  </div>
);
export default CertItem;
