import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { StockTable } from "../page";

// Define your PDF document component
const styles = StyleSheet.create({
  body: {
    padding: "20px",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 30,
  },
  table: {
    width: "auto",
    border: "1px solid #000000",
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableColHeader: {
    width: "20%",
    border: "1px solid #000000",
    backgroundColor: "#F1F9F7",
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol: {
    width: "20%",
    border: "1px solid #000000",
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellHeader: {
    margin: "auto",
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 12,
  },
});

interface ReportProps {
  data: StockTable[];
}

const Report: React.FC<ReportProps> = ({ data }) => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.title}>Products in Stock Report</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Product Name</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Category</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Price</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>In Stock</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Total Value</Text>
          </View>
        </View>

        {data.map((item) => (
          <View key={item.id} style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.name}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.category}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.price}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.inStock}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.totalValue}</Text>
            </View>
          </View>
        ))}

        {/* More rows as per your data */}
      </View>
    </Page>
  </Document>
);

export default Report;
