import React, { useCallback, useEffect, useState } from "react";
import { FormValues } from "../types";
import { useWalletStore } from "../../../zustand/wallet/store";
import { useTransactionsStore } from "../../../zustand/transactions/store";
import { v1 as uuidv1 } from "uuid";
import { SheetManager } from "react-native-actions-sheet";

const useWalletSheet = (type: "incomes" | "expenses") => {
  const [loading, insertCash, takeOutCash, editCash] = useWalletStore(
    ({ loading, insertCash, takeOutCash, editCash }) => [
      loading,
      insertCash,
      takeOutCash,
      editCash,
    ]
  );
  const [insertRecord, editRecord] = useTransactionsStore(
    ({ insertRecord, editRecord }) => [insertRecord, editRecord]
  );
  const [showColorModal, setShowColorModal] = useState(false);

  const createRecordAsync = async (data: FormValues) => {
    if (type === "incomes") {
      await insertCash(+data.amount);
    } else {
      await takeOutCash(+data.amount);
    }
    insertRecord({
      id: uuidv1(),
      ...data,
    });
    SheetManager.hide("wallet-sheet");
  };

  const updateRecordAsync = async (data: FormValues) => {
    editRecord(data);
    await editCash(+data.amount);
    SheetManager.hide("wallet-sheet");
  };

  const onSubmit = async (data: FormValues) => {
    if (data.id) {
      updateRecordAsync(data); // Edit
    } else {
      createRecordAsync(data); // New
    }
  };

  const getHeaderText = (id: string, type: string) => {
    if (id) return "Edit Transaction";
    type === "incomes" ? "CASH IN" : "CASH OUT";
  };

  const getButtonText = (id: string, type: string) => {
    if (id) return !loading ? "Update" : "Updating";
    if (type === "incomes") {
      return !loading ? "Insert" : "Inserting";
    }
    return !loading ? "Take out" : "Taking out";
  };

  return {
    loading,
    onSubmit,
    showColorModal,
    setShowColorModal,
    getHeaderText,
    getButtonText,
  };
};

export default useWalletSheet;
