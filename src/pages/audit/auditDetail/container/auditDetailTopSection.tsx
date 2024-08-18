import Breadcrumb from '@/components/Breadcrumb';
import { items } from '../../const/data';

interface AuditDetailTopSectionProps {
  title: string;
  subTitle: string;
}

export function AuditDetailTopSection({ title, subTitle }: AuditDetailTopSectionProps) {
  return (
    <>
      <div className="mt-[120px] flex flex-col">
        <Breadcrumb items={items} />
        <div className="mb-1 pt-[24px] text-2xl font-bold text-black">{title}</div>
        <div className="pb-[24px] pt-[8px] text-sm font-medium text-[#999999]">{subTitle}</div>
      </div>
      <div className="h-[2px] w-full bg-[#E7E7E7]" />
    </>
  );
}
