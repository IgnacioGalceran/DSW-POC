import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e8faf3",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
    alignSelf: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 40,
    alignSelf: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 40,
    gap: 10,
  },
  medicoCard: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    elevation: 2,
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    gap: 2,
  },
  medicoName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  medicoDetails: {
    fontSize: 16,
    color: "#555",
  },
  button: {
    padding: 10,
    backgroundColor: "black",
    borderRadius: 5,
    alignSelf: "center",
    textAlign: "center",
    justifyContent: "flex-end",
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  trash: {
    cursor: "pointer",
  },
});
