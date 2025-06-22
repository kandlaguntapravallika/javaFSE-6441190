public class DocumentFactory {
    public static Document createDocument(String type) {
        if (type.equalsIgnoreCase("word")) {
            return new WordDocument();
        } else if (type.equalsIgnoreCase("pdf")) {
            return new PdfDocument();
        } else if (type.equalsIgnoreCase("excel")) {
            return new ExcelDocument();
        } else {
            return null;
        }
    }
}