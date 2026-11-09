package com.app.domain.todo;

import java.time.LocalDateTime;
import java.util.UUID;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Todo {
  private UUID id;
  private String title;
  private boolean completed;
  private int version;
  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;
}
