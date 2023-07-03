"use client";

import { Store } from "@prisma/client";

interface SettingsFormProps {
  initialData: Store;
}

export const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  return <div className="flex items-center justify-between">SettingForm</div>;
};
