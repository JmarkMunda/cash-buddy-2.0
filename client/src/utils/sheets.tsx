import { registerSheet } from "react-native-actions-sheet";
import CashInSheet from "../screens/Wallet/components/CashInSheet";
import CashOutSheet from "../screens/Wallet/components/CashOutSheet";

registerSheet("insert-cash-sheet", CashInSheet);
registerSheet("remove-cash-sheet", CashOutSheet);

export {};
