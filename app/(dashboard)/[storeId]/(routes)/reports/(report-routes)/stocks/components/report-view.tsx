'use client';

import dynamic from 'next/dynamic';
import Report  from './report';

const PDFViewer = dynamic(
    () => import('@react-pdf/renderer').then((mod) => mod.PDFViewer),
    { ssr: false }
);

interface ReportViewProps{
    data: any[];
}

const ReportView: React.FC<ReportViewProps> = ({
    data
}) => {
    return ( 
        <PDFViewer style={{ width: '100%', height: '800px'}}>
        <Report data={data} />
      </PDFViewer>
     );
}
 
export default ReportView;