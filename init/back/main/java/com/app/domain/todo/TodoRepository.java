package com.app.domain.todo;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TodoRepository {

  List<Todo> findAll();

  Optional<Todo> findById(UUID id);
}
