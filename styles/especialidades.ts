import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8faf3",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "40%",
    alignSelf: "center",
    gap: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
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
    justifyContent: "center",
    gap: 20,
    marginTop: 40,
  },
  especialidadCard: {
    padding: 12,
    marginVertical: 10,
    borderRadius: 5,
    elevation: 2,
    backgroundColor: "white",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
  },
  especialidadName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonEspecialidad: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "black",
    borderRadius: 5,
    alignSelf: "center",
    justifyContent: "flex-end",
    color: "#fff",
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  button: {
    marginTop: 40,
    padding: 10,
    backgroundColor: "black",
    borderRadius: 5,
    alignSelf: "center",
    justifyContent: "flex-end",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  trash: {
    cursor: "pointer",
  },
});
