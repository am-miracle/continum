"use client"

import * as React from "react"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog"
import {
    Field,
    FieldLabel,
    FieldError,
    FieldDescription,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { FolderAddIcon, SparklesIcon } from "@hugeicons/core-free-icons"

const workspaceSchema = z.object({
    name: z
        .string()
        .min(2, "Workspace name must be at least 2 characters.")
        .max(50, "Workspace name must be under 50 characters.")
        .regex(/^[a-zA-Z0-9\s&'-]+$/, "Only letters, numbers, spaces, &, ' and - are allowed."),
})

type WorkspaceFormValues = z.infer<typeof workspaceSchema>

interface AddWorkspaceDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onAdd: (name: string) => void
}

export function AddWorkspaceDialog({ open, onOpenChange, onAdd }: AddWorkspaceDialogProps) {
    const form = useForm<WorkspaceFormValues>({
        resolver: zodResolver(workspaceSchema),
        mode: "onChange",
        defaultValues: { name: "" },
    })

    const onSubmit = (values: WorkspaceFormValues) => {
        onAdd(values.name)
        form.reset()
        onOpenChange(false)
    }

    React.useEffect(() => {
        if (!open) form.reset()
    }, [open, form])

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md gap-0 p-0 overflow-hidden border-border/60">
                <div className="relative flex flex-col items-center justify-center gap-3 bg-linear-to-br from-violet-500/10 via-blue-500/5 to-transparent px-6 pt-8 pb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500 to-blue-500 shadow-lg shadow-violet-500/25">
                        <HugeiconsIcon icon={FolderAddIcon} strokeWidth={1.5} className="h-6 w-6 text-white" />
                    </div>
                    <DialogHeader className="items-center text-center">
                        <DialogTitle className="text-base font-semibold">New Workspace</DialogTitle>
                        <DialogDescription className="text-xs text-muted-foreground">
                            Create a focused space to organise your thoughts and projects.
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="px-6 py-5">
                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={field.name} className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                        Workspace Name
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="e.g. Product Launch, Research Hub…"
                                        className="mt-1.5 h-9 text-sm"
                                        autoComplete="off"
                                        autoFocus
                                    />
                                    <FieldDescription className="text-xs">
                                        Use letters, numbers, spaces, &amp;, &apos; or - only.
                                    </FieldDescription>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </div>

                    <DialogFooter className="px-6 pb-5 pt-0 border-t-0 bg-transparent mx-0 mb-0 rounded-none">
                        <Button
                            type="button"
                            variant="ghost"
                            className="h-9 text-sm"
                            onClick={() => onOpenChange(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={form.formState.isSubmitting}
                            className="h-9 gap-2 bg-linear-to-r from-violet-500 to-blue-500 hover:from-violet-600 hover:to-blue-600 text-white shadow-md shadow-violet-500/20 border-0"
                        >
                            <HugeiconsIcon icon={SparklesIcon} strokeWidth={2} className="h-3.5 w-3.5" />
                            Create Workspace
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
