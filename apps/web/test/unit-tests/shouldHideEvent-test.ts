/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { MatrixEvent, EventType } from "matrix-js-sdk/src/matrix";
import shouldHideEvent from "../../src/shouldHideEvent";
import SettingsStore from "../../src/settings/SettingsStore";

jest.mock("../../src/settings/SettingsStore", () => ({
    getValue: jest.fn(),
}));

describe("shouldHideEvent", () => {
    it("should hide decryption failures when hideDecryptionFailures is enabled", () => {
        const event = new MatrixEvent({
            type: EventType.RoomMessageEncrypted,
            sender: "@alice:server.org",
            room_id: "!room:server.org",
            content: {
                msgtype: "m.bad.encrypted",
            },
        });

        // Directly mock the instance method
        jest.spyOn(event, "isDecryptionFailure").mockReturnValue(true);

        (SettingsStore.getValue as jest.Mock).mockImplementation((name) => {
            if (name === "hideDecryptionFailures") return true;
            return true;
        });

        expect(shouldHideEvent(event)).toBe(true);
    });

    it("should NOT hide decryption failures when hideDecryptionFailures is disabled", () => {
        const event = new MatrixEvent({
            type: EventType.RoomMessageEncrypted,
            sender: "@alice:server.org",
            room_id: "!room:server.org",
            content: {
                msgtype: "m.bad.encrypted",
            },
        });

        jest.spyOn(event, "isDecryptionFailure").mockReturnValue(true);

        (SettingsStore.getValue as jest.Mock).mockImplementation((name) => {
            if (name === "hideDecryptionFailures") return false;
            return true;
        });

        expect(shouldHideEvent(event)).toBe(false);
    });
});
