import { Models } from "node-appwrite";
import WorkspaceIdJoinPage from "./../../app/(standalone)/workspaces/[workspaceId]/join/[inviteCode]/page";

export type Project = Models.Document & {
  name: string;
  imageUrl: string;
  WorkspaceIdJoinPage: string;
};
