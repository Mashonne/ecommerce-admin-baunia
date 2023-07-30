import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { OrderTable } from "../page";

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
  data: OrderTable[];
}

const Report: React.FC<ReportProps> = ({ data }) => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.title}>Monthly Sales Report - 07/23</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Products</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Customer Name</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Address</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Phone no.</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Order Total</Text>
          </View>
        </View>

        {data.map((item) => (
          <View key={item.id} style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.products}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.name}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.address}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.phone}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.totalPrice}</Text>
            </View>
          </View>
        ))}

        {/* More rows as per your data */}
      </View>
    </Page>
  </Document>
);

export default Report;
